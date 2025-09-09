function QuickViewDemo() {
    const [count, setCount] = React.useState(0);
    const [message, setMessage] = React.useState('Hello QuickView!');
    
    return (
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            maxWidth: '600px',
            margin: '40px auto',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1>⚛️ React Demo in QuickView</h1>
            
            <div style={{
                background: '#f0f9ff',
                border: '2px solid #0ea5e9',
                borderRadius: '8px',
                padding: '20px',
                margin: '20px 0'
            }}>
                <h2>Interactive Counter</h2>
                <p style={{ fontSize: '24px', margin: '10px 0' }}>Count: {count}</p>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        background: '#0ea5e9',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        margin: '0 5px'
                    }}
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        margin: '0 5px'
                    }}
                >
                    Decrement
                </button>
            </div>
            
            <div style={{
                background: '#f0fdf4',
                border: '2px solid #22c55e',
                borderRadius: '8px',
                padding: '20px',
                margin: '20px 0'
            }}>
                <h2>Dynamic Message</h2>
                <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '300px',
                        marginBottom: '10px'
                    }}
                />
                <p style={{ fontSize: '18px', color: '#22c55e' }}>{message}</p>
            </div>
        </div>
    );
}