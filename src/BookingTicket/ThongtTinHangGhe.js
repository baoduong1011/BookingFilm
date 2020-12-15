import React, { Component } from 'react';
import {connect} from 'react-redux';


class ThongtTinHangGhe extends Component {
    render() {
        
        return (
            <div className='mt-5' >
                <button className='gheDuocChon'></button> <span className='text-warning' style={{ fontSize: '20px' }}> Ghế được chọn </span>
                <br />
                <button className='gheDangChon'></button> <span className='text-success' style={{ fontSize: '20px' }}> Ghế đang chọn </span>
                <br />
                <button style={{ marginLeft: '0' }} className='ghe'></button> <span className='text-light' style={{ fontSize: '20px', marginLeft: '0' }}> Ghế chưa chọn </span>


                <div className="mt-5" style={{}}>
                    <table border="2" className="table">
                        <thead>
                            <tr className='text-light' style={{fontSize:'20px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.danhSachDangDat.map((ghe,index)=> {
                               return <tr key={index}>
                                    <td>{ghe.soGhe}</td>
                                    <td>{ghe.gia}</td>
                                    <button onClick={() => {
                                        this.props.dispatch({
                                            type:'HUY_GHE',
                                            soGhe:ghe.soGhe
                                        })
                                    }} className='text-danger' >Hủy</button>
                               </tr>
                           })}
                        </tbody>


                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng Tiền</td>
                                <td>{this.props.danhSachDangDat.reduce((total,ghe,index)=>{
                                       return total=total+ghe.gia;
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachDangDat: state.BookingReducer.danhSachDangDat
    }
}
export default connect(mapStateToProps) (ThongtTinHangGhe)