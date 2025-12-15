"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

// prop type
type IProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    imageSrc: string;
    imageAlt: string;
};

export default function ImageLightbox({ showModal, setShowModal, imageSrc, imageAlt }: IProps) {
    const handleClose = () => {
        setShowModal(false);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        // Ensure we're on the client side
        if (typeof window === 'undefined' || !document.body) return;

        const originalOverflow = document.body.style.overflow || '';

        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalOverflow || 'unset';
        }

        // Cleanup on unmount
        return () => {
            if (typeof document !== 'undefined' && document.body) {
                document.body.style.overflow = originalOverflow || 'unset';
            }
        };
    }, [showModal]);

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            centered={true}
            className="tp-image-lightbox-modal"
            size="xl"
            backdrop="static"
            fullscreen="sm-down"
        >
            <button
                onClick={handleClose}
                type="button"
                className="tp-image-lightbox-close-btn"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    touchAction: 'manipulation'
                }}
            >
                <i className="fa-regular fa-xmark"></i>
            </button>

            <Modal.Body
                style={{
                    padding: 0,
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={handleClose}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                        priority
                        sizes="100vw"
                    />
                </div>
            </Modal.Body>
        </Modal>
    );
}
