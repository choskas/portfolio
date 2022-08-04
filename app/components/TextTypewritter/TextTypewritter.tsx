
import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';

interface ITextWriterState {
    writtenText: string,
    index: number;
}

const TextTypewritter = ({ text, speed, onEnd = () => {} }: { text: string, speed: number, onEnd?: Function }) => {
    const initialState = { writtenText: '', index: 0 };
    const sanitizer = DOMPurify.sanitize;

    const [state, setState] = React.useState<ITextWriterState>(initialState);

    useEffect(() => {
        if (state.index < text.length - 1) {
            const animKey = setInterval(() => {
                setState(state => {
                    if (state.index > text.length) {
                        clearInterval(animKey);
                        return { ...state };
                    }
                    return {
                        writtenText: state.writtenText + text[state.index],
                        index: state.index + 1
                    };
                });
            }, speed);
            // @ts-ignore
            if (text.length < animKey) {
                onEnd();
            }

            return () => clearInterval(animKey);
        }
    }, [text, speed, state]);

    useEffect(() => {
        if (text.length > 0) {
            setState(initialState);
        }
    }, [text])

    return <div className="text-writer-component"><span className="text" dangerouslySetInnerHTML={{ __html: sanitizer(state.writtenText) }} /></div>
}

export default TextTypewritter;