import React from 'react'
import PropTypes from "prop-types"

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("mensaje", formattedMessage, logo)
    return (<>
        <div className="fixed bottom-2 right-2 flex flexColumn">
            <a
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={logo} width={width} height={height} alt="whatsapp-logo" />
            </a>
        </div>
    </>
    )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "logo-company.png",
    phone: "phone-number",
    message: "company message",
    width: 60,
    height: 60
}

WhatsappButton.schema = {
    title: "Whatsapp button",
    type: "object",
    properties: {
        logo: {
            title: "Whatsapp logo",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "phone number",
            description: "Add your number phone please",
            type: "string"
        },
        message: {
            title: "company message",
            description: "Add your message please",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "width logo",
            description: "size for logo height",
            type: "number"
        },
        height: {
            title: "height logo",
            description: "size for logo height",
            type: "number"
        }
    }
}
export default WhatsappButton;