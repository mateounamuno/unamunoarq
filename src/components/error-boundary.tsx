'use client';
import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Algo salió mal</h1>
                    <p>{this.state.error?.message}</p>
                    <button onClick={() => this.setState({ hasError: false, error: null })}>
                        Intentar de nuevo
                    </button>
                    <pre style={{ textAlign: 'left', marginTop: '20px', background: '#f5f5f5', padding: '10px' }}>
                        {this.state.error?.stack}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}


