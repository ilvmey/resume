import './App.css'
import myPhoto from './assets/photo.jpg';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{
        width: '20%',
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <img
          src={myPhoto}
          alt="大頭照"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%', // 變成圓形，如果是 0% 就是方形
            objectFit: 'cover',   // 避免照片比例被拉伸
            border: '4px solid #3b82f6', // 加入藍色邊框增加專業感
            marginBottom: '20px'
          }}
        />

        <div style={{ width: '100%', textAlign: 'left' }}>
          <h3 style={{
            fontSize: '20px',
            borderBottom: '1px solid #475569',
            paddingBottom: '8px',
            marginBottom: '12px',
            color: '#3b82f6'
          }}>
            學歷
          </h3>

          <p style={{ fontSize: '16px', margin: '0', fontWeight: 'bold' }}>
            國立政治大學
          </p>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
            金融學系 | 2012-2016
          </p>
          <h3 style={{
            fontSize: '20px',
            borderBottom: '1px solid #475569',
            paddingBottom: '8px',
            marginBottom: '12px',
            color: '#3b82f6'
          }}>
            工作技能
          </h3>
          <p style={{ fontSize: '16px', margin: '0', fontWeight: 'bold' }}>
            程式語言
          </p>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
            Python
          </p>
          <h3 style={{
            fontSize: '20px',
            borderBottom: '1px solid #475569',
            paddingBottom: '8px',
            marginBottom: '12px',
            color: '#3b82f6'
          }}>
            工作經驗
          </h3>
          <p style={{ fontSize: '16px', margin: '0', fontWeight: 'bold' }}>
            無限方舟
          </p>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
            某某專案
          </p>

          <h3 style={{
            fontSize: '20px',
            borderBottom: '1px solid #475569',
            paddingBottom: '8px',
            marginTop: '30px',
            marginBottom: '12px',
            color: '#3b82f6'
          }}>
            專業證照
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>
            TOEIC 695
          </p>
        </div>
      </div>


      <div style={{ width: '80%', backgroundColor: '#f8fafc' }}>
        工作經歷
      </div>
    </div>
  )
}

export default App
