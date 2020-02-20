import { ServiceResult } from "./models/service-result";
import { Utils } from "./common/utils";
export class Index {
    constructor() {
    //    console.log(this.findMissingNumber([1,2,3,5,6]));
    }

    /**
     * Created by DatPTT 20-02-2020
     * Hàm tìm kiếm số còn thiếu trong mảng
     */
    findMissingNumber(arr: Array<number> = []): ServiceResult {

        const result = new ServiceResult();

        //Validate dãy số

        //Kiểm tra số lương
        const length = arr.length;
        if (length && length != 99) {
            result.handleError("Mảng sai số lượng cho phép");
            return result;
        }

        //Kiểm tra số âm
        const negativeNumber = arr.find(x => x < 0);
        if (!!negativeNumber) {
            result.handleError("Mảng sai định dạng, không được nhập số âm");
            return result;
        }

        //Kiểm tra số lớn hơn 100
        const maxNumber = arr.find(x => x > 100);
        if (!!maxNumber) {
            result.handleError("Mảng sai định dạng, không được nhập số lớn hơn 100");
            return result;
        }

        //Kiểm tra số trùng
        if (Utils.findDuplicateItems(arr).length) {
            result.handleError("Mảng sai định dạng, có số trùng nhau");
            return result;
        }

        //Thực hiện tìm số còn thiếu

        //Tạo mảng số chuẩn từ 1-100
        //Cách 1 
        //Lấy tổng 1-100 trừ đi tổng của mảng đã truyền vào
        const missingNumber =  Utils.SumFrom1ToN(100) - Utils.SumOfArray(arr);

        //Cách 2
        //Lấy mảng chuẩn tìm phần tử còn thiếu ở mảng truyền vào
        // const standardArr = Utils.createStandardArrNumber(1,100);
        // const missingNumber = standardArr.find(x=> !arr.includes(x));

        result.Data = missingNumber;
        return result;
    }
}

export default new Index();