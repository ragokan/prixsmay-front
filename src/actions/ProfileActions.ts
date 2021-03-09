import { setUserState } from "../state/UserState";
import { IUserResponse } from "../types/ResponseTypes";
import { apios } from "../utils/Apios";
import { AddAlertAction } from "./AlertActions";

export const GetProfileAction = async (username: string) => {
  const { data } = await apios.get<IUserResponse>(`/profile/${username}`);

  return data.user;
};

interface ProfileUpdateTypes {
  image?: File;
  pictureUrl?: string;
  callback?: Function;
}
export const UpdateProfilePictureAction = async ({ image, pictureUrl, callback }: ProfileUpdateTypes) => {
  const cb = () => {
    callback && callback();
    AddAlertAction("Profile picture is updated successfully!", "green.400", 3000);
  };
  if (pictureUrl) {
    const { data } = await apios.post<IUserResponse>("/user/addProfile", { pictureUrl });
    data.user && setUserState({ user: data.user });
    cb();
  } else if (image) {
    const formData = new FormData();
    formData.append("image", image);

    const { data } = await apios.post<IUserResponse>("/user/addProfile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    data.user && setUserState({ user: data.user });
    cb();
  }
};
