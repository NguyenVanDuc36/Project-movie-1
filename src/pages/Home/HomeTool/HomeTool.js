import React from 'react'
import '../../.././assets/styles/layout/Home.scss'
import { Tabs, Radio } from 'antd';
import { Select } from 'antd';
import { Fragment } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { layDanhSachPhimAction } from '../../../Redux/action/QuanLiPhimAction';
import SearchFilm from './../SearchFilm/SearchFilm';
import { ISSEARCH } from './../../../utils/settings';
import { layDanhSachPhimSearchAction } from './../../../Redux/action/QuanLiPhimAction';
const { Option } = Select;

const { TabPane } = Tabs;
export default function HomeTool(props) {
  const dispatch = useDispatch();
  function callback(key) {
    console.log(key);
  }

  const operations = <Fragment >
    <h1 style={{ color: '#31d7a9', fontWeight: '600', fontSize: '22px' }} >SEARCH TICKETS</h1>
    <h1 style={{ color: 'white', fontWeight: '600', fontSize: '27px' }}>FIND YOUR TICKETS NOW</h1>
  </Fragment>;

  const formik = useFormik({
    initialValues: {
      tenPhim: ''
    },
    onSubmit: (values) => {
      // console.log(values.tenPhim);
      if (values.tenPhim !== '') {
        dispatch(layDanhSachPhimSearchAction(values.tenPhim));
        dispatch({
          type: ISSEARCH
        })
      }

    }
  })



  return (
    <div >
      <div className="home-tool" >
        <Tabs tabBarExtraContent={operations} defaultActiveKey="1" onChange={callback}>
          <TabPane tab={<div className="tab-logo"><i class="far fa-file-video"></i><span> MOVIE</span></div>} key="1">
            <div className="row tab-pane" >

              <div className="col-3 flex items-end" >
                <div className="form-group relative" >
                  <form onSubmit={formik.handleSubmit} >
                    <button type="submit" className="absolute" style={{ color: '#90a5e8' }}  ><i class="fas fa-search"></i></button>
                    <input name="tenPhim" onChange={formik.handleChange} className="form-control" placeholder="Search for movie" ></input>
                  </form>

                </div>
              </div>

              <div className="col-3 city select  flex items-center" >
                <div className="flex" >
                  <i class="fas fa-city"></i>
                  <span className="name" style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >City</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="New York">New York</Option>
                    <Option value="dhaka">California</Option>
                    <Option value="madrid">Florida</Option>
                    <Option value="koltaka">Nevada</Option>
                    <Option value="rome">Oregon</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3 city select  flex items-center" >
                <div className="flex" >
                  <i class="far fa-calendar-alt"></i>
                  <span className="name" style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >Date</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="11/04/2021">11/04/2021</Option>
                    <Option value="10/04/2021">10/04/2021</Option>
                    <Option value="09/04/2021">09/04/2021</Option>
                    <Option value="08/04/2021">08/04/2021</Option>
                    <Option value="07/04/2021">07/04/2021</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3 city select  flex items-center" >
                <div className="flex" >
                  <i class="fas fa-film"></i>
                  <span className="name" style={{ color: 'white', fontSize: '15px', color: '#31d7a9' }} >Movie</span>
                  <Select defaultValue="Avatar" style={{ width: 120 }} bordered={false}>
                    <Option value="Avatar">Avatar</Option>
                    <Option value="Inception">Inception</Option>
                    <Option value="Parasite">Parasite</Option>
                    <Option value="Searching">Searching</Option>
                    <Option value="Lion">Lion</Option>
                  </Select>
                </div>
              </div>

            </div>
          </TabPane>

          <TabPane tab={<div className="tab-logo"><i class="far fa-file-video"></i><span> SPORT</span></div>} key="2">
            <div className="row tab-pane" >

              <div className="col-3 flex items-end" >
                <div className="form-group relative" >
                  <form onSubmit={formik.handleSubmit} >
                    <button type="submit" className="absolute" style={{ color: '#90a5e8' }}  ><i class="fas fa-search"></i></button>
                    <input name="tenPhim" onChange={formik.handleChange} className="form-control" placeholder="Search for movie" ></input>
                  </form>

                </div>
              </div>

              <div className="col-3 city select flex items-center" >
                <div className="flex" >
                  <i class="fas fa-city"></i>
                  <span style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >City</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="New York">New York</Option>
                    <Option value="dhaka">California</Option>
                    <Option value="madrid">Florida</Option>
                    <Option value="koltaka">Nevada</Option>
                    <Option value="rome">Oregon</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3 city select  flex items-center" >
                <div className="flex" >
                  <i class="far fa-calendar-alt"></i>
                  <span style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >Date</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="11/04/2021">11/04/2021</Option>
                    <Option value="10/04/2021">10/04/2021</Option>
                    <Option value="09/04/2021">09/04/2021</Option>
                    <Option value="08/04/2021">08/04/2021</Option>
                    <Option value="07/04/2021">07/04/2021</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3 city  select flex items-center" >
                <div className="flex" >
                  <i class="fas fa-film"></i>
                  <span style={{ color: 'white', fontSize: '15px', color: '#31d7a9' }} >Movie</span>
                  <Select defaultValue="Avatar" style={{ width: 120 }} bordered={false}>
                    <Option value="Avatar">Avatar</Option>
                    <Option value="Inception">Inception</Option>
                    <Option value="Parasite">Parasite</Option>
                    <Option value="Searching">Searching</Option>
                    <Option value="Lion">Lion</Option>
                  </Select>
                </div>
              </div>

            </div>
          </TabPane>

          <TabPane tab={<div className="tab-logo"><i class="far fa-file-video"></i><span> LIVE</span></div>} key="3">
            <div className="row tab-pane" >

              <div className="col-3 flex items-end" >
                <div className="form-group relative" >
                  <form onSubmit={formik.handleSubmit} >
                    <button type="submit" className="absolute" style={{ color: '#90a5e8' }}  ><i class="fas fa-search"></i></button>
                    <input name="tenPhim" onChange={formik.handleChange} className="form-control" placeholder="Search for movie" ></input>
                  </form>

                </div>
              </div>

              <div className="col-3 city  flex items-center" >
                <div className="flex" >
                  <i class="fas fa-city"></i>
                  <span style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >City</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="New York">New York</Option>
                    <Option value="dhaka">California</Option>
                    <Option value="madrid">Florida</Option>
                    <Option value="koltaka">Nevada</Option>
                    <Option value="rome">Oregon</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3  city  flex items-center" >
                <div className="flex" >
                  <i class="far fa-calendar-alt"></i>
                  <span style={{ color: 'white', fontSize: '17px', color: '#31d7a9' }} >Date</span>
                  <Select defaultValue="New York" style={{ width: 120 }} bordered={false}>
                    <Option value="11/04/2021">11/04/2021</Option>
                    <Option value="10/04/2021">10/04/2021</Option>
                    <Option value="09/04/2021">09/04/2021</Option>
                    <Option value="08/04/2021">08/04/2021</Option>
                    <Option value="07/04/2021">07/04/2021</Option>
                  </Select>
                </div>
              </div>

              <div className="col-3 city  flex items-center" >
                <div className="flex" >
                  <i class="fas fa-film"></i>
                  <span style={{ color: 'white', fontSize: '15px', color: '#31d7a9' }} >Movie</span>
                  <Select defaultValue="Avatar" style={{ width: 120 }} bordered={false}>
                    <Option value="Avatar">Avatar</Option>
                    <Option value="Inception">Inception</Option>
                    <Option value="Parasite">Parasite</Option>
                    <Option value="Searching">Searching</Option>
                    <Option value="Lion">Lion</Option>
                  </Select>
                </div>
              </div>

            </div>
          </TabPane>

        </Tabs>




      </div>



    </div>

  )
}
