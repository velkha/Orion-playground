/**
 * The UserData type in TypeScript defines properties for name, age, image, description, aboutme, and
 * role.
 * @property {string} name - The `name` property in the `UserData` type represents the name of a user.
 * It is of type `string`, which means it should be a sequence of characters (letters, numbers,
 * symbols) enclosed in quotation marks.
 * @property {number} age - The `age` property in the `UserData` type represents the age of a user and
 * is of type `number`.
 * @property {string} image - The `image` property in the `UserData` type represents a string that
 * typically contains the URL or path to an image associated with the user's profile or account. This
 * image could be a profile picture, avatar, or any other image relevant to the user.
 * @property {string} description - The `description` property in the `UserData` type represents a
 * string that provides a brief description or summary of the user. It could include information such
 * as interests, hobbies, or any other relevant details about the user.
 * @property {string} aboutme - The `aboutme` property in the `UserData` type represents a string that
 * contains information about the user, typically used to provide a brief overview or summary of the
 * user's background, interests, or personality. It is a part of the user's profile data and can be
 * used to give others a
 * @property {string} role - The `role` property in the `UserData` type represents the role of the
 * user, such as "admin", "user", "moderator", etc. It specifies the position or designation of the
 * user within a system or organization.
 */

export type UserData = {
    name: string;
    age: number;
    image: string;
    description: string;
    aboutme: string;
    role: string;
};