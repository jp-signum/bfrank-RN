import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import media from '../../../../theme/Device'

const RelativeContainer = styled.div`
    position: relative;
    padding-top: 10px;
`

const EmailInput = styled.input`
    border-bottom: rgba(26, 6, 6, 0.3) 2px solid;
    transition: ease 0.5s;
    padding-top: 14px;
    font-size: .8em;

    :focus {
        border-bottom: #1a0606 2px solid;
        outline: none;
    }
`

const SubscribeBtnDiv = styled.div`
   padding: 20px 0px 6px 0px;;
`

const SubscribeBtn = styled.button`
   font-size: 1em;
   color: rgba(26, 6, 6, 0.3);
   border: 2px solid rgba(26, 6, 6, 0.3);
   border-radius: 4px;

    :hover {
        border: 2px solid rgba(26, 6, 6, 1);
        cursor: pointer;
        color: rgba(26, 6, 6, 1);
    }
`

const ErrorDiv = styled.div`
    transition: ease 0.5s;
    padding: 6px 5px 6px 5px;

    ${media.phoneS`
        padding: 7px 8px 7px 8px;
    `}
    
    ${media.phoneM`
        padding: 7px 10px 7px 10px;
    `}

    ${media.phoneL`
        padding: 8px 12px 8px 12px;
    `}

    ${media.tablet`
        padding: 9px 40px 9px 40px;
    `}

    ${media.laptop`
        padding: 10px 40px 10px 40px;
    `}
`

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });
    return (
        <div>
            <div>
                <EmailInput
                    ref={node => (email = node)}
                    type='email'
                    placeholder='Email' />
            </div>
            <SubscribeBtnDiv>
                <SubscribeBtn onClick={submit}>
                    Subscribe
                </SubscribeBtn>
            </SubscribeBtnDiv>
            <ErrorDiv>
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
            </ErrorDiv>
        </div>
    );
};

function Mailchimp() {
    const url = '//RaveNailz.us20.list-manage.com/subscribe/post?u=bdba576b50d40e1fdd53264ae&amp;id=b61e7d5ed4'

    return (
        <RelativeContainer>
            <MailchimpSubscribe
                url={url}
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