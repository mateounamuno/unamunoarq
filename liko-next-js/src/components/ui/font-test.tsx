import React from 'react';

const FontTest = () => {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'var(--tp-ff-body)'
        }}>
            <h1 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '30px' }}>
                Typography Test - Geist & Geist Mono
            </h1>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '20px' }}>
                    Geist Font (Body & Headings)
                </h2>
                <p style={{ fontFamily: 'var(--tp-ff-body)', marginBottom: '15px' }}>
                    This is the Geist font used for body text. It's a modern, clean sans-serif font designed for excellent readability.
                </p>
                <p style={{ fontFamily: 'var(--tp-ff-p)', marginBottom: '15px' }}>
                    The Geist font family includes multiple weights from 100 to 900, making it perfect for creating visual hierarchy.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', fontWeight: '100', marginBottom: '10px' }}>Weight 100</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-body)', fontWeight: '100' }}>Thin text example</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', fontWeight: '400', marginBottom: '10px' }}>Weight 400</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-body)', fontWeight: '400' }}>Regular text example</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', fontWeight: '700', marginBottom: '10px' }}>Weight 700</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-body)', fontWeight: '700' }}>Bold text example</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', fontWeight: '900', marginBottom: '10px' }}>Weight 900</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-body)', fontWeight: '900' }}>Black text example</p>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '20px' }}>
                    Geist Mono Font (Monospace)
                </h2>
                <p style={{ fontFamily: 'var(--tp-ff-body)', marginBottom: '15px' }}>
                    Geist Mono is a monospace font perfect for code, technical content, and when you need fixed-width characters.
                </p>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '10px' }}>Inline Code Example:</h3>
                    <code style={{
                        fontFamily: 'var(--tp-ff-mono)',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}>
                        const greeting = "Hello, Geist Mono!";
                    </code>
                </div>

                <div>
                    <h3 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '10px' }}>Code Block Example:</h3>
                    <pre style={{
                        fontFamily: 'var(--tp-ff-mono)',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        padding: '20px',
                        borderRadius: '8px',
                        overflowX: 'auto',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}>
                        {`function calculateArea(width, height) {
  return width * height;
}

const result = calculateArea(10, 5);
console.log(\`Area: \${result}\`);`}
                    </pre>
                </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '20px' }}>
                    Font Comparison
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '15px' }}>Geist (Sans-serif)</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-body)', fontSize: '16px', lineHeight: '1.6' }}>
                            The quick brown fox jumps over the lazy dog. 0123456789
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '15px' }}>Geist Mono (Monospace)</h3>
                        <p style={{ fontFamily: 'var(--tp-ff-mono)', fontSize: '16px', lineHeight: '1.6' }}>
                            The quick brown fox jumps over the lazy dog. 0123456789
                        </p>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundColor: 'rgba(0,0,0,0.02)',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.1)'
            }}>
                <h3 style={{ fontFamily: 'var(--tp-ff-heading)', marginBottom: '15px' }}>
                    Font Variables Used:
                </h3>
                <ul style={{ fontFamily: 'var(--tp-ff-body)', lineHeight: '1.6' }}>
                    <li><code style={{ fontFamily: 'var(--tp-ff-mono)', backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px' }}>--tp-ff-body</code> - Main body text font (Geist)</li>
                    <li><code style={{ fontFamily: 'var(--tp-ff-mono)', backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px' }}>--tp-ff-heading</code> - Headings font (Geist)</li>
                    <li><code style={{ fontFamily: 'var(--tp-ff-mono)', backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px' }}>--tp-ff-p</code> - Paragraph text font (Geist)</li>
                    <li><code style={{ fontFamily: 'var(--tp-ff-mono)', backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px' }}>--tp-ff-mono</code> - Monospace font (Geist Mono)</li>
                </ul>
            </div>
        </div>
    );
};

export default FontTest;
