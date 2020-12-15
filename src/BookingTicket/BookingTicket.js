import React, { Component } from 'react';
import ThongtTinHangGhe from './ThongtTinHangGhe';
import './Ticket.css';
import danhSachGheData from './danhSachGhe.json';
import HangGhe from './HangGhe';

export default class BookingTicket extends Component {


    renderHangGhe = () => {
            return danhSachGheData.map((hangGhe,index) => {
                return <div key={index} >
                    <HangGhe hangGhe={hangGhe} soHangGhe = {index}  />
                </div>
            })
    }

    render() {
        return (
            <div className='bookingMovie' style={{position:'fixed',width:'100%',height:'100%',backgroundImage:"url(./img/bgmovie.jpg)",backgroundSize:'100%'}}>
                <div style={{positon:'fixed',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.6)'}}>
                   <div className='container-fluid'>
                       <div className='row'>
                           <div className='col-8'>
                                <h1 className=" text-warning" >ĐẶT VÉ XEM PHIM</h1>
                                <h6 className="text-light" >MÀN HÌNH</h6>
                                <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}} className='mt-3'>
                                    <div className='screen'></div>
                                </div>
                                {this.renderHangGhe()}
                           </div>
                           <div className='col-4'>
                            <h3 className="mt-3 text-warning" >DANH SÁCH GHẾ BẠN CHỌN</h3>
                                <ThongtTinHangGhe/>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}
