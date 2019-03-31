import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const mcUrl = '//RaveNailz.us20.list-manage.com/subscribe/post?u=bdba576b50d40e1fdd53264ae&amp;id=b61e7d5ed4'

const RelativeContainer = styled.div`
    position: relative;
    padding-top: 10px;
`

const NameInput = styled.input`
    border-bottom: rgba(26, 6, 6, 0.3) 2px solid;
    transition: ease 0.5s;
    width: 110px;
    margin-right: 40px;
    :focus {
        border-bottom: #1a0606 2px solid;
        outline: none;
    }
`

const EmailInput = styled.input`
    border-bottom: rgba(26, 6, 6, 0.3) 2px solid;
    transition: ease 0.5s;
    width: 110px;

    :focus {
        border-bottom: #1a0606 2px solid;
        outline: none;
    }
`

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <div>
            <div>
                <NameInput
                    ref={node => (name = node)}
                    type='text'
                    placeholder='Name' />
                <EmailInput
                    ref={node => (email = node)}
                    type='email'
                    placeholder='Email' />
            </div>
            <div>
                <button onClick={submit}>
                    Submit
            </button>
            </div>

            <div>
                {status === 'sending' && <div style={{ color: '#1a0606' }}>sending...</div>}
                {status === 'error' && (
                    <div
                        style={{ color: 'red' }}
                        dangerouslySetInnerHTML={{ __html: message }} />
                )}
                {status === 'success' && (
                    <div
                        style={{ color: 'green' }}
                        dangerouslySetInnerHTML={{ __html: message }} />
                )}
            </div>
        </div>
    );
};

function Mailchimp() {
    return (
        <RelativeContainer>
            <MailchimpSubscribe
                url={mcUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </RelativeContainer>
    )
}

export default Mailchimp