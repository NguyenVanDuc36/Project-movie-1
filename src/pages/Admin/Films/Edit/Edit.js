import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import moment from 'moment';
import { GROUPID } from '../../../../utils/settings';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimAction, themPhimUploadHinhAction, capNhatPhimAction } from './../../../../Redux/action/QuanLiPhimAction';

export default function Edit(props) {

    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    let thongTinPhim = useSelector(state => state.danhSachPhimReducer.thongTinPhim)
    useEffect(() => {
        let id = props.match.params.id;
        dispatch(layThongTinPhimAction(id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim:thongTinPhim?.maPhim,
            tenPhim: thongTinPhim?.tenPhim,
            trailer: thongTinPhim?.trailer,
            moTa: thongTinPhim?.moTa,
            ngayKhoiChieu: thongTinPhim?.ngayKhoiChieu,
            dangChieu: thongTinPhim?.dangChieu,
            sapChieu: thongTinPhim?.sapChieu,
            hot: thongTinPhim?.hot,
            danhGia: thongTinPhim?.danhGia,
            hinhAnh: null,
            maNhom: ''

        },
        onSubmit: (values) => {
            values.maNhom = GROUPID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if(values.hinhAnh !== null){
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }

            dispatch(capNhatPhimAction(formData));


        }
    })

    const handleChangeDate = (value) => {
        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
         await formik.setFieldValue('hinhAnh', file)
        // Tạo đối tượng để đọc file
    
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif') {
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }
        }
        
    }

    const FormSizeDemo = () => {
    }
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }
    return (
        <div className="mt-5">
            <h3 className="text-2xl">Edit phim</h3>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name="tenPhim" name="tenPhim" value={formik.values.tenPhim} onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Trailer">
                    <Input name="trailer" name="trailer" value={formik.values.trailer} onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Mô tả">
                    <Input name="moTa" name="moTa" value={formik.values.moTa} onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={"DD/MM/YYYY"} value={moment(formik.values.ngayKhoiChieu)} onChange={handleChangeDate} />
                </Form.Item>

                <Form.Item label="Sắp chiếu" >
                    <Switch checked={formik.values.sapChieu} onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>

                <Form.Item label="Đang chiếu" >
                    <Switch checked={formik.values.dangChieu} onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>

                <Form.Item label="Hot" >
                    <Switch checked={formik.values.hot} onChange={handleChangeSwitch('hot')} />
                </Form.Item>


                <Form.Item label="Đánh giá">
                    <InputNumber value={formik.values.danhGia} onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input accept="image/png, image/jpeg , image/gif,image/png,image/jpg" type="file" onChange={handleChangeFile} />
                    <img className="mt-3 object-cover" width={200} height={200} src={imgSrc === ''?thongTinPhim.hinhAnh : imgSrc} alt="..." />
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button className="btn btn-outline-danger" type="submit"><i class="fas mr-1 fa-edit"></i> Cập nhật  </button>
                </Form.Item>
            </Form>
        </div>
    )
}
