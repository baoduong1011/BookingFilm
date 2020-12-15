
const stateDafault = {
    danhSachDangDat : [
            {soGhe:"A1",gia:1000},
            {soGhe:"B5",gia:1000},
    ]
}

const BookingReducer = (state = stateDafault , action) => {
    switch(action.type) {
        case 'DAT_GHE': {

            let danhSachGheUpdate = [...state.danhSachDangDat];
            let index = danhSachGheUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index!==-1) {
                    danhSachGheUpdate.splice(index,1);
            }
            else {
                danhSachGheUpdate.push(action.ghe)
            }
            state.danhSachDangDat = danhSachGheUpdate;
            return {...state}
        }

        case 'HUY_GHE' : {
            let danhSachGheUpdate = [...state.danhSachDangDat];
            let index = danhSachGheUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index!==-1) {
                    danhSachGheUpdate.splice(index,1);
            }
            state.danhSachDangDat = danhSachGheUpdate;
            return {...state}
        }
        default: return {...state}
    }
}

export default BookingReducer