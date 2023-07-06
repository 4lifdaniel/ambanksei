import { useState } from "react";
import UpdateForm from "./UpdateForm";

function Holidays({ holidays, baseURL, setHolidays }) {
  const [showForm, setShowForm] = useState(false);
  const deleteHoliday = (id) => {
    fetch(baseURL + "/holidays/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        setHolidays((prevHolidays) => {
          return prevHolidays.filter((holiday) => holiday._id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHolidayComponent = (holiday) => {
    setShowForm("");
    setHolidays((prevHolidays) => {
      console.log(prevHolidays);
      const updatedHolidays = prevHolidays.filter(
        (eachHoliday) => eachHoliday._id !== holiday._id
      );
      console.log(updatedHolidays);
      return [holiday, ...updatedHolidays];
    });
  };

  function updateHoliday(holiday) {
    setShowForm(holiday);
  }

  return (
    <>
      <table>
        <tbody>
          {holidays.map((holiday) => {
            return (
              <tr key={holiday._id}>
                <td>{holiday.name}</td>
                <td
                  onClick={() => {
                    deleteHoliday(holiday._id);
                  }}
                >
                  X
                </td>
                <td
                  onClick={() => {
                    updateHoliday(holiday);
                  }}
                >
                  Edit
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showForm && (
        <UpdateForm
          holiday={showForm}
          baseURL={baseURL}
          handleUpdateHoliday={updateHolidayComponent}
        />
      )}
    </>
  );
}
export default Holidays;
