import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from './../../../../Redux/action/QuanLiPhimAction';

export default function AddNew() {

  const [imgSrc,setImgSrc] = useState('');
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom : ''

    },
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
            formData.append('File', values.hinhAnh, values.hinhAnh.name);
        }
      }

      dispatch(themPhimUploadHinhAction(formData));

    }
  })

  const handleChangeDate =(value)=>{
    let ngayKhoiChieu =moment(value).format("DD/MM/YYYY");
    formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu)
  }

  const handleChangeSwitch = (name) =>{
    return (value)=>{
      formik.setFieldValue(name,value)
    }
  }

  const handleChangeFile =(e)=>{
    let file = e.target.files[0];
    // Tạo đối tượng để đọc file
    if(file.type === 'image/jpeg' ||  file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif' ){
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) =>{
        setImgSrc(e.target.result)
      }
    }
    formik.setFieldValue('hinhAnh',file)
  }

  const FormSizeDemo = () => {
  }
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  }
  return (
    <div className="mt-5">
      <h3 className="text-2xl">Thêm phim</h3>
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
          <Input name="tenPhim" name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Trailer">
          <Input name="trailer"  name="trailer" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Mô tả">
          <Input name="moTa" name="moTa" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} />
        </Form.Item>

        <Form.Item  label="Sắp chiếu" >
          <Switch onChange={handleChangeSwitch('sapChieu')} />
        </Form.Item>

        <Form.Item label="Đang chiếu" >
          <Switch onChange={handleChangeSwitch('dangChieu')}  />
        </Form.Item>

        <Form.Item label="Hot" >
          <Switch onChange={handleChangeSwitch('hot')}  />
        </Form.Item>



        <Form.Item label="Đánh giá">
          <InputNumber onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input accept="image/png, image/jpeg , image/gif,image/png,image/jpg"  type="file" onChange={handleChangeFile}/>
          <img  className="mt-3 object-cover" width={200} height={200} src={imgSrc} alt="..." />
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button className="btn btn-outline-success" type="submit"><i class="fas mr-1 fa-plus"></i> Thêm phim </button>
        </Form.Item>
      </Form>
    </div>
  )
}
