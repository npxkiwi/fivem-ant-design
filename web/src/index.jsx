import React, { useState, useEffect } from 'react';
import useStore from './state/store';
import SendNuiCallback from './utils/sendnuicallback';
import { Button, Modal } from 'antd';


export default function Homepage() {
    const { value, buttonValue, setButtonValue, resetState } = useStore();
    const [whoami, setWhoami] = useState('?')

    useEffect(() => {
        SendNuiCallback('whoami', {}, (cb) => {
            setWhoami(cb)
        })
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <div className='nui-wrapper w-screen h-screen flex justify-center items-center'>
            <div id="nui-content" className='w-1/2 h-1/2 bg-red-400'>
                 <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            </div>
        </div>
    )
}