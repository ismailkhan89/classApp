import  { gql }  from '@apollo/client'

//#region  USERS
export const USER_LOGIN = gql`${`mutation Login($facebookId:String,$email:String,$password:String,$type:String!,$appleId:String,$name:String,$notificationToken:String){
    login(facebookId:$facebookId,email:$email,password:$password,type:$type,appleId:$appleId,name:$name,notificationToken:$notificationToken){
     userId
     token
     tokenExpiration
     name
     email
     phone
     type
   }
  }`}` 

  export const CREATE_USER = gql`${`
  mutation CreateUser($facebookId:String,
    $phone:String,
    $email:String,
    $password:String,
    $lastname:String
    $picture:String,
  	$name : String,
    $username : String,
    $notificationToken:String,
    $appleId:String,
    $type : String
    $reqUser :String
    ){
      createUser(userInput:{
          facebookId:$facebookId,
        username : $username,
           name :$name,
          phone:$phone,
          picture :$picture,
          email:$email,
          password:$password,
          notificationToken:$notificationToken,
          appleId:$appleId
        last_name : $lastname
        type : $type
        reqUser : $reqUser
      }){
          userId
          token
          tokenExpiration
          name
          email
          phone
          notificationToken
      }
  }`}`


  export const PROFILE = gql`${`query{
    profile{
      _id
      name
      last_name
      username
      phone
      email
      notificationToken
      picture
      gender
      dateofbirth
      information
      stripe_id
      type
      phone
      stripe_cards {
        id
        object
        address_city
        last4
        name
        exp_year
        exp_month
        customer
      }
    }
  }`}`

  export const GET_ORG = gql`${`query GetUserOrg {
    getUserOrg {
      _id
      name
      last_name
      username
      type
    }
  }`}`

  export const FORGOT_PASSWORD = gql`${`mutation forgotPassword($email : String!){
    forgotPassword(email : $email){
      result
    }
  }`}`

  export const FORGOT_PASSWORD_VERIFY = gql`${`mutation forgotPasswordVerification(
    $email :String!
    $code :String!
  ){
    forgotPasswordVerification(email :$email,
    code :$code){
      result
    }
  }`}`

  export const NEW_PASSWORD = gql`${`mutation newPassword($email :String! , 
    $newPassword : String!){
    newPassword(email : $email,
    newPassword :$newPassword){
      result
    }
  }`}`


  export const RESET_PASSWORD = gql`${`mutation resetPassword(
    $email :String!, 
    $password : String!
    $newPassword : String!){
      resetPassword(email : $email,
    password : $password
    newPassword :$newPassword){
      result
    }
  }`}`

  export const USER_UPDATE = gql`${`mutation updateUser(
    $name :String
    $lastname : String
    $username:String
    $picture :String
  ){
    updateUser(updateUserInput :{
      name :$name
      lastname :$lastname
      username :$username
      picture :$picture
    }){
      _id
      name
      last_name
      username
      phone
      email
      notificationToken
      picture
    }
  }`}`

  //#endregion