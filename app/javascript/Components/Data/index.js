export default function APIData() {
  const Data = [
    {
      id: 1,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 2,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 3,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 4,
      checked: false,
      name: 'Avinash',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 5,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 6,
      checked: false,
      name: 'Samuel',
      email: 'deepak@mail.com',
      role: 'Admin',
    },
    {
      id: 7,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
    {
      id: 8,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Member',
    },
    {
      id: 9,
      checked: false,
      name: 'Samuel',
      email: 'dump@mail.com',
      role: 'Admin',
    },
  ]

  const dataProvider = []

  Data.forEach((item, index) => {
    Data.forEach((itemData) => {
      const { id, name } = itemData
      const customId = id + index * 10
      const customEmail = itemData.email.split('@')

      customEmail[0] = customEmail[0] + customId

      const email = customEmail.toString().replace(',', '@')

      if (id % 2 === 0) {
        dataProvider.push({
          id: customId,
          checked: true,
          name: name + customId,
          email,
          role: 'Manager',
        })
      } else if (id % 3 === 0) {
        dataProvider.push({
          id: customId,
          checked: false,
          name: name + customId,
          email,
          role: 'User',
        })
      } else {
        dataProvider.push({
          id: customId,
          checked: false,
          name: name + customId,
          email,
          role: 'Admin',
        })
      }
    })
  })

  return dataProvider
}

export const customUrlOrigin = window.location.origin

export const fetchPersonsAPI = customUrlOrigin + 'persons'

export const DestroyPersonAPI = customUrlOrigin + 'remove_employee?email='

export const newEmployeeAPI = customUrlOrigin + 'new_employee'

export const updateRecordAPI = customUrlOrigin + 'update_employee'
