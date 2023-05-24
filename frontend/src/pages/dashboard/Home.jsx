import React from 'react'
import NavSide from '../../constants/NavSide'
import DataTable from 'react-data-table-component';
import useFetch from '../../hooks/useFetch'
import { BsPersonCheck, } from 'react-icons/bs'
import { FaSuitcase } from 'react-icons/fa'
import { BiMobile } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { TextInput } from '../../customs/Input'
import axios from "axios";





function Home() {
  const { data, isLoading, refetch } = useFetch('all')


  const handleChange = async (ref, surname, firstName) => {
    const confirm = window.confirm(`Are you sure you want to delete ${surname} ${firstName} Qr info?`);
    if (confirm) {
      try {
        const res = await axios.delete(`${process.env.REACT_APP_HOST_NAME}/employees/delete/${ref}/`);
        console.log(res)

        alert(res.data.message)
        refetch()
      } catch (error) {
        console.error(error);
        alert('Delete failed')
      }
    }
  };

  const columns = [
    {
      name: 'Qr Image',
      selector: row => <div className='border-2 border-primary m-2 rounded-lg'><img src={`${process.env.REACT_APP_HOST_NAME}/${row.qr_employee.png}/`} alt={``} className='h-28' /></div>,
    },
    {
      name: 'Name',
      selector: row => <div className=''>
        <p className='text-base text-secondary font-bold'>{row.surname} {row.firstName}</p>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-2'>
            <div className='flex gap-2'>
              <FaSuitcase />

              <p>{row.company ?? 'None'}</p>

            </div>
            <div className='flex gap-2'>
              <BsPersonCheck />

              <p>{row.position ?? 'None'}</p>
            </div>
            <div className='flex gap-2'>
              <BiMobile />
              <p>{row.telephone_employee[0]?.phone ?? 'None'}</p>

            </div>
          </div>
        </div>
      </div>,
    },
    {
      name: 'Download',
      selector: row => <div className='flex gap-4'>
        <Link to={`${row.qr_employee.png}`} className='border-2 border-secondary text-lg px-4 py-1 rounded-2xl hover:text-secondary hover:scale-110 transition-all' download target="_self"> PNG</Link>
        <Link to={`${row.qr_employee.svg}`} className=' text-lg px-4 py-1 rounded-2xl bg-secondary text-white hover:scale-110 transition-all' download target="_self">SVG</Link>
      </div>,
    },
    {
      name: 'Actions',
      selector: row => <div className='flex gap-4'>
        <Link to={`/edit/${row.ref}`}> <p className='border-2 border-primary text-lg px-4 py-1 rounded-2xl hover:bg-primary hover:text-white hover:scale-110 transition-all'>Edit</p></Link>
        <button className='border-2 bg-red-700 text-white text-lg px-4 py-1 rounded-2xl hover:bg-red-400 hover:text-white hover:scale-110 transition-all' onClick={() => handleChange(row.ref, row.surname, row.firstName)}>Delete</button>
      </div>,
    },
  ];
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = data.filter(
    item => item.surname && item.surname.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <TextInput label={`Search`} onChange={e => setFilterText(e.target.value)} onClear={handleClear} value={filterText} />
    );
  }, [filterText, resetPaginationToggle]);



  return (
    <div>
      <NavSide >
        <div className='space-y-4 h-full min-h-screen'>
          <div className='md:mt-10 flex justify-between items-center w-full bg-white'>
            <div className='fixed z-[10] bg-white w-full h-28 md:mt-0 -mt-20 pt-10 shadow-lg'>
              <h1 className='text-3xl font-extrabold text-black px-4'>My Qrs</h1>
            </div>
            <div className='fixed right-10 z-[10] md: md:mt-0 -mt-14'>
              <Link to={`/create-qr/`}>
                <button className='py-4 md:px-16 px-6  bg-primary rounded-3xl text-white hover:bg-secondary hover:-translate-y-1 transition-all'>Create</button>
              </Link>
            </div>


          </div>

          <div className='md:pt-[100px] pt-[50px] px-10'>

            <DataTable
              selectableRows
              columns={columns}
              data={filteredItems}
              progressPending={isLoading}
              pagination
              title={`Employee list`}
              paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              highlightOnHover
              pointerOnHover
            />




          </div>

        </div>
      </NavSide>
    </div>
  )
}

export default Home