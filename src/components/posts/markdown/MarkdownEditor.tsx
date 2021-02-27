import { compiler } from "markdown-to-jsx"
import React from "react"
import ReactMde from "react-mde"
import "react-mde/lib/styles/css/react-mde-all.css"

export const MarkdownEditor: React.FC<{ value: string; setValue: (value: string) => void }> = ({ value, setValue }) => {
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write")
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => Promise.resolve(compiler(markdown))}
      />
    </div>
  )
}
