import React from "react"
import ReactMarkdown from "react-markdown"
import ReactMde, { SaveImageHandler } from "react-mde"
import { UploadImageAction } from "../../../actions/UtilityActions"
import { Renderer } from "../../../utils/Renderer"

export const MarkdownEditor: React.FC<{ value: string; setValue: (value: string) => void }> = ({ value, setValue }) => {
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write")

  const saveImage: SaveImageHandler = async function* (image) {
    const url = await UploadImageAction(image)
    yield url
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
