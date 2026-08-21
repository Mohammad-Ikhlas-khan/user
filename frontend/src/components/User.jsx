import React from "react";

const User = ({ user }) => {
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border rounded-lg p-6 shadow-md flex flex-col gap-3">

            <p><strong>Name:</strong> {user.name}</p>

            <p><strong>Father Name:</strong> {user.fatherName}</p>

            <p><strong>Email:</strong> {user.email}</p>

            <p><strong>Phone Number:</strong> {user.phoneNo}</p>

            <p><strong>Nationality:</strong> {user.nationality}</p>

            <p><strong>Qualification:</strong> {user.qualification}</p>

            <p><strong>Date of Birth:</strong> {user.dob}</p>

            <p><strong>Gender:</strong> {user.gender}</p>

            <p><strong>Address:</strong> {user.address}</p>

            <p><strong>City:</strong> {user.city}</p>

            <p><strong>State:</strong> {user.state}</p>

            <p><strong>Pincode:</strong> {user.pincode}</p>

            <p>
                <strong>Skills:</strong>{" "}
                {Array.isArray(user.skills)
                    ? user.skills.join(", ")
                    : user.skills}
            </p>

        </div>
    );
};

export default User;