import { IUploadImageResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

const blobToFile = (theBlob: Blob, fileName: string): File => {
  var b: any = theBlob
  b.lastModifiedDate = new Date()
  b.name = fileName
  return <File>theBlob
}

export const UploadImageAction = async (image: ArrayBuffer): Promise<string> => {
  const arrayBufferView = new Uint8Array(image)
  const blob = new Blob([arrayBufferView], { type: "image/jpeg" })
  const img = blobToFile(blob, "pic.png")

  const formData = new FormData()
  formData.append("image", img)

  const { data } = await apios
    .post<IUploadImageResponse>("/utils/uploadImage", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .catch((e) => e)

  return data.imageUrl
}
