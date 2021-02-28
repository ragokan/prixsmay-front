import React from "react"
import ReactMarkdown from "react-markdown"
import ReactMde, { SaveImageHandler } from "react-mde"
import { Renderer } from "../../../utils/Renderer"

export const MarkdownEditor: React.FC<{ value: string; setValue: (value: string) => void }> = ({ value, setValue }) => {
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write")

  const saveImage: SaveImageHandler = async function* (data) {
    yield "https://picsum.photos/300"
    return true
  }

  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(<ReactMarkdown renderers={Renderer()} children={markdown} />)
        }
        paste={{ saveImage }}
      />
    </div>
  )
}
