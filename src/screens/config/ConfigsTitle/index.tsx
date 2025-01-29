import { useState } from "react";
import { ConfigTitle, ConfigTitleContainer, ConfigTitleUnderline } from "./styles"

interface IConfigsTitleProps {
    text: string
}

export const ConfigsTitle = ({ text }: IConfigsTitleProps) => {
    const [titleWidth, setTitleWidth] = useState(0)


    return (
        <ConfigTitleContainer>
            <ConfigTitle onLayout={(e) => {
                const { width } = e.nativeEvent.layout;
                setTitleWidth(width)
            }}>{text}</ConfigTitle>
            <ConfigTitleUnderline style={{ width: titleWidth}}/>
        </ConfigTitleContainer>
    )
}