  export interface APIUser {
    userId: number;
    userName: string;
    userAge: number;
    userGender?: any;
    userAddress?: any;
    userNIF: number;
    userPhone: number;
    userEmail?: any;
    userPwd: string;
    userRole?: any;
  }

  export interface APIProduct {
    id: number;
    productName: string;
    productCategorie: string;
    productDescription: string;
    productPrice: number;
    status: string;
  }

  export interface APIOrder {
    id: number;
    user: APIUser;
    product: APIProduct[];
  }
