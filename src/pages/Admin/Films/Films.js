import React, { Fragment } from 'react'
import { Table } from 'antd';
import { Input, Button, Space } from 'antd';
import { AudioOutlined, CalendarOutlined, DeleteFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachPhimAction, xoaPhimAction } from '../../../Redux/action/QuanLiPhimAction';
import { NavLink } from 'react-router-dom';
import LoadingApi from './../../../Components/LoadingApi/LoadingApi';
import { history } from './../../../App';

export default function Films() {

    const dispatch = useDispatch();
    const danhSachPhim = useSelector(state => state.danhSachPhimReducer.danhSachPhim)

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [])

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            value: (text, object) => { return <span></span> },
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            width: 200
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film) => {
                return <Fragment>
                    <img onError={(e) => {
                        e.target.onError = null; e.target.src = "http://movieapi.cyberlearn.vn/hinhanh/raya-and-the-last-dragon_gp03.png"
                    }} style={{ height: '60px', width: '60px' }} className="object-cover" alt={film.tenPhim} src={film.hinhAnh} />
                </Fragment>
            },
            sorter: (a, b) => a.age - b.age,
            width: 150
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let tenPhimA = a.moTa.toLowerCase().trim();
                let tenPhimB = b.moTa.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 100 ? film.moTa.substr(0, 100) + '...' : film.moTa}
                </Fragment>
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, film) => {
                return <Fragment>
                    <div className="flex" >
                        <NavLink key={1} className="mr-3 text-blue-700 text-xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined /></NavLink>
                        <span onClick={()=>{
                            if(window.confirm('Bạn có muốn xóa phim '+film.tenPhim)){
                                dispatch(xoaPhimAction(film.maPhim));
                            }
                        }} key={2} className="text-xl mr-3 cursor-pointer text-red-600" ><DeleteOutlined /></span>
                        <NavLink key={1} className="mr-3 text-green-700 text-xl" to={`/admin/films/showtimes/${film.maPhim}/${film.tenPhim}`}><CalendarOutlined /></NavLink>
                    </div>
                </Fragment>
            },
            sortDirections: ['descend'],
        },
    ];

    const data = danhSachPhim;
    function onChange(pagination, filters, sorter, extra) {
    }


    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch =(value)=>{
        dispatch(layDanhSachPhimAction(value))
    };
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin)
    const isLoadingApi = useSelector(state => state.LoadingReducer.isLoadingApi)
    return (

        <Fragment>
            {!isLoadingApi ? <div className="container">
                <h3 className="text-2xl mb-5" >Quản lí phim</h3>
                <Button onClick={()=>{
                    history.push('/admin/films/addnew');
                }} className="mb-3" >Thêm phim</Button> <br />
                <Space direction="vertical">
                    <Search
                        className="mb-5"
                        placeholder="input search text"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </Space>
                <Table columns={columns} dataSource={data} rowKey={"maPhim"} onChange={onChange} />
            </div> : <div className="mt-52"><LoadingApi /></div> }

        </Fragment>


    )
}
