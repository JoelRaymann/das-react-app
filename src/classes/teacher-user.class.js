// Define teacher user object

/**
 * A Class to store the teacher user details as objects
 *
 * @class TeacherUser
 */
class TeacherUser {
  /**
   * Creates an instance of TeacherUser.
   * @param {String} username - The username
   * @param {String} email - the mail id of the user
   * @param {String} name - the name of the user
   * @param {String} isVerified - A status token for verification by email
   * @memberof TeacherUser
   */
  constructor(username, email, name, isVerified) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.isVerified = isVerified;
  }
}

export default TeacherUser;
