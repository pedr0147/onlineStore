export interface APIUser{
  userId: number;
  userName: string;
  userAge?: number;
  userGender?: string;
  userAddress?: string;
  userNIF?: number;
  userPhone?: number;
  userEmail?: string;
  userPwd: string;
  userRole?: string;
}
