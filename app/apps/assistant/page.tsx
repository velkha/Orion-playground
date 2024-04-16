import AssistantMessage from "../../components/assistant/AssistantMessage";
import InputZone from "../../components/assistant/InputZone";
import UserMessage from "../../components/assistant/UserMessage";
import "../../ui/styles/assistant.css"
export default function Assistant() {
    return (
        <>
            <div id="assistantChat">
                <div id="chatZone">
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                    <AssistantMessage message="Hello! How can I help you today?" type="text"/>
                    <UserMessage message="I need help with my order" />
                    <AssistantMessage message="Sure! What is your order number?" type="text"/>
                    <UserMessage message="123456" />
                    <AssistantMessage message="Thank you! Your order is on its way." type="text" />
                    <UserMessage message="Thank you!" />
                </div>
                <InputZone id="inputZone" placeholder="Type your message here" />
            </div>
        </>
    );
  }