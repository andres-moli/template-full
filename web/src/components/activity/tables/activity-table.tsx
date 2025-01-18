import { useState } from "react";
import Card from "../../cards/Card";
import { BsEyeFill } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import { TbMapShare } from "react-icons/tb";
import { MetadataPagination, OrderTypes, StatusVisitEnum, useVisitsQuery } from "../../../domain/graphql";
import dayjs from "dayjs";
import { PaginationTable } from "../../table/PaginationTable";
import { toast } from "sonner";
import UserSelect from "../../users/select/user-select";
const getRandomColor = (status: StatusVisitEnum) => {
  if (status === StatusVisitEnum.Initiated) {
    return 'orange'; // Naranja claro
  }
  if (status === StatusVisitEnum.Realized) {
    return 'green'; // Verde claro
  }
  return '#b2ebf2'; // Azul claro
};

const getStatusLabel = (status: StatusVisitEnum) => {
  switch (status) {
    case StatusVisitEnum.Initiated:
      return 'Iniciada';
    case StatusVisitEnum.Realized:
      return 'Realizada';
    default:
      return 'Desconocida';
  }
};
const ActivityTable = () => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectUser, setSelectUser] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "status") {
      setStatusFilter(value);
    } else if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };
  const takeValue = 10
  const [skip, setSkip] = useState(0)
  const {data, loading, refetch} = useVisitsQuery({
    variables: {
      orderBy: {
        createdAt: OrderTypes.Desc
      },
      pagination: {
        skip,
        take: takeValue
      }
    }
  })
  const handelDelteFilter = async () => {
    const toastId = toast.loading('Borrando filtrado...')
    setSkip(0)
    setStatusFilter('')
    setStartDate('')
    setEndDate('')
    setDescription('')
    setSelectUser('')
    try {
      await refetch({
        orderBy: {
          createdAt: OrderTypes.Desc
        },
        pagination: {
          skip,
          take: takeValue
        },
        where: {}
      })
    }catch {
      toast.error('¡Oops! Ha ocurrido un error al intentar filtrar. Por favor, inténtelo más tarde.')
    }
    toast.dismiss(toastId)
  }
  const handleFilterSubmit = async () => {
    const toastId = toast.loading('Filtando informacion...')
    setSkip(0)
    try {
      await refetch({
        where: {
          ...(statusFilter ? { status: { _eq: statusFilter } } : {}),
          ...(startDate && endDate ? { createdAt: { _between: [`${startDate} 00:00:00`, `${endDate} 23:59:59`] } } : {}),
          ...(description ? { description: { _contains: description } } : {}),
          ...(selectUser ? {user: {_eq: selectUser}} : {})
        },
        orderBy: {
          createdAt: OrderTypes.Desc
        },
        pagination: {
          skip,
          take: takeValue
        }
      })
    } catch {
      toast.error('¡Oops! Ha ocurrido un error al intentar filtrar. Por favor, inténtelo más tarde.')
    }
    toast.dismiss(toastId)
    console.log("Filtros aplicados:", { statusFilter, startDate, endDate, description,selectUser });
  };
  return (
      <>
        <div className="w-full md:w-full lg:w-full">
          <div className="flex justify-between items-center space-x-4">
            {/* Filtro de Estado */}
            <div className="flex space-x-4 flex-1">
              <UserSelect onSelect={(e)=>setSelectUser(e)} clear={selectUser == ''}/>
            </div>
            <div className="flex-1">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
              <select
                name="status"
                id="status"
                value={statusFilter}
                onChange={handleFilterChange}
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              >
                <option selected value={''}>Seleccionar Estado</option>
                <option value={StatusVisitEnum.Initiated}>Iniciada</option>
                <option value={StatusVisitEnum.Realized}>Realizada</option>
              </select>
            </div>

            {/* Filtro de Rango de Fechas */}
            <div className="flex space-x-4 flex-1">
              <div className="w-1/2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha Inicio</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={startDate}
                  onChange={handleFilterChange}
                  className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha Fin</label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={endDate}
                  onChange={handleFilterChange}
                  className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Filtro de Descripción */}
            <div className="flex-1">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={handleFilterChange}
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="Escribe una descripción"
              />
            </div>

            {/* Botón de Filtrar */}
            <div className="flex items-end">
              <button
                onClick={handleFilterSubmit}
                type="button"
                className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Filtrar
              </button>
            </div>
            <div className="flex items-end">
              <button
                onClick={handelDelteFilter}
                type="button"
                className="bg-red-500 text-white hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        {/* Filtro Card */}
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Usuario
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Fecha
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Descripción
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Ver más
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Ver mapa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    loading
                    ?
                    <>Cargando...</>
                    :
                    data?.visits.map((visit)=> {
                      return (
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">{visit.user.fullName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{dayjs(visit.dateVisit).format('YYYY-MM-DD HH:mm')}</td>
                        <td className="whitespace-nowrap px-6 py-4">{visit.description}</td>
                        <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className="h-2.5 w-2.5 rounded-full me-2"
                            style={{ backgroundColor: getRandomColor(visit.status) }}
                          ></div>
                          {getStatusLabel(visit.status)} {/* Mostrar estado en español */}
                        </div>
                      </td>
                        <td className="whitespace-nowrap px-6 py-4">
                           <BsEyeFill className="w-5 h-8 text-gray-500 mr-3 cursor-pointer"/>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <TbMapShare className="w-5 h-8 text-gray-500 mr-3 cursor-pointer"/>
                        </td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <Card className="w-50 md:w-30 lg:w-50">
              <PaginationTable skipState={{ value: skip, setValue: setSkip }} metaDataPagination={data?.visitsCount as MetadataPagination} takeValue={takeValue} />
            </Card>
          </div>
        </div>
      </div>
    </>
    );
  };
  
  export default ActivityTable;
  