
/**
 * Created by DatPTT 20-02-2020
 * Entity kết quả trả về từ server
 */
export class ServiceResult {
    Code: number;
    Success: boolean;
    ErrorMessage: string;
    Data: any;

    constructor() {
        this.Code = 200;
        this.Success = true;
    }

    /**
    * Created by DatPTT 20-02-2020
    * hàm xử lý lỗi
    */
    handleError(message: string) {
        this.Success = false;
        this.Code = 500;
        this.ErrorMessage = message;
    }
}