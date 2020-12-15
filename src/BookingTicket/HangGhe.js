import React, { Component } from 'react';
import {connect} from 'react-redux'


class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {

            // if (index === 0 ){
            //     return <span className='rowNumber'>
            //         {ghe.soGhe}
            //     </span>
            // }
            // trạng thái đã được đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDaDat => gheDaDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }





            let gheDaDat  = '';
            let disabled = false ;
            if(ghe.daDat) {
                gheDaDat = 'gheDuocChon';
                disabled = true;
            }

            // xét trạng thái đang đặt 


            return <button onClick={ () => {
                {this.props.datGhe(ghe)}
            }} disabled={disabled} className={`ghe ${gheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    

    renderSoHang = () => {
      return this.props.hangGhe.danhSachGhe.map((hang,index) => {
          return <span className='rowNumber'>
              {hang.soGhe}
          </span>
      })
    }

    renderHangGhe = () => {

        if(this.props.soHangGhe === 0 ){
            return <div>
                {this.props.hangGhe.hang}
                {this.renderSoHang()}
            </div>
        }

        else {
            return <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
        </div>
        }
    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-2" style={{fontSize:'15px'}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BookingReducer.danhSachDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe : (ghe) => {
            dispatch({
                type:'DAT_GHE',
                ghe
            })

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (HangGhe)

