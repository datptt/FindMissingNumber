export class Utils {

    /**
    * Created by DatPTT 20-02-2020
    * Hàm tìm kiếm số trùng trong mảng
    */
    public static findDuplicateItems(arr: Array<number> = []): Array<number> {
        let seen = new Set();
        let store = new Array<number>();
        arr.filter(item => seen.size === seen.add(item).size && !store.includes(item) && store.push(item));
        return store;
    }

    /**
    * Created by DatPTT 20-02-2020
    * Hàm tạo 1 mảng số liên tục từ from => to
    */
    public static createStandardArrNumber(from: number = 0, to: number = 100): Array<number> {
        return [...Array(from + to).keys()].splice(to);
    }

    /**
    * Created by DatPTT 20-02-2020
    * Hàm tính tổng số 1 đến n
    */
    public static SumFrom1ToN(toNumber: number): number{
       return toNumber ? (toNumber * (toNumber+1)) / 2 : 0;
    }

    /**
    * Created by DatPTT 20-02-2020
    * Hàm tính tổng 1 mảng
    */
   public static SumOfArray(arr: Array<number>  = []): number{
    return arr.reduce((a, b) => a + b, 0);
   }
}