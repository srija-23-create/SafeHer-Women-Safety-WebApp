import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { FaUserPlus, FaPhoneAlt, FaTrash } from "react-icons/fa";

function Contacts() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relation: "",
  });

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/contacts/${user.id}`
      );

      const data = await response.json();

      if (response.ok) {
        setContacts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  const addContact = async () => {
    if (
      !newContact.name ||
      !newContact.phone ||
      !newContact.relation
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            name: newContact.name,
            phone: newContact.phone,
            relation: newContact.relation,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        fetchContacts();

        setShowForm(false);

        setNewContact({
          name: "",
          phone: "",
          relation: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/contacts/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Emergency Contacts
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your trusted emergency contacts.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-xl"
        >
          <FaUserPlus />
          Add Contact
        </button>

      </div>

      {showForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={newContact.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={newContact.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            name="relation"
            placeholder="Relation"
            value={newContact.relation}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <button
            onClick={addContact}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Save Contact
          </button>

        </div>
      )}

      <div className="grid gap-6">

        {contacts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center text-gray-500">
            No emergency contacts added yet.
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
            >
              <div>

                <h2 className="text-xl font-bold">
                  {contact.name}
                </h2>

                <p className="text-gray-500 mt-2 flex items-center gap-2">
                  <FaPhoneAlt />
                  {contact.phone}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {contact.relation}
                </p>

              </div>

              <button
                onClick={() => deleteContact(contact.id)}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                <FaTrash />
              </button>

            </div>
          ))
        )}

      </div>

    </DashboardLayout>
  );
}

export default Contacts;