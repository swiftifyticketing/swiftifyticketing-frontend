export const validateInputs = (userData, setError) => {
    const { username, password, role } = userData;
    let errorMsg = {
        usernameError: '',
        passwordError: '',
        roleError: ''
    };
    let formValid = true;

    if (!username) {
        formValid = false;
        errorMsg.usernameError = 'Please enter a username';
    }

    if (typeof username !== undefined) {
        if (username.length <= 3 || username.length > 20) {
            formValid = false;
            errorMsg.usernameError =
                'Username must be between 4 and 20 characters.';
        }
    }

    if (!password) {
        formValid = false;
        errorMsg.passwordError = 'Please enter a password';
    }

    if (typeof password !== undefined) {
        // /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-a])(?=.*[@#$%&]).*$/
        if (!password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-z]).*$/)) {
            formValid = false;
            errorMsg.passwordError = 'Password requires at least 6 characters';
        }
    }

    if (role === '') {
        formValid = false;
        errorMsg.roleError = 'Please select a role';
    }

    setError(errorMsg);

    return formValid;
};

export const facilitiesArray = () => {
    const result = [
        {
            id: 0,
            title: 'Art and Design Center',
            key: 'facilities'
        },
        {
            id: 1,
            title: 'Bayramian Hall',
            key: 'facilities'
        },
        {
            id: 2,
            title: 'Brown Center',
            key: 'facilities'
        },
        {
            id: 3,
            title: 'Citrus Hall',
            key: 'facilities'
        },

        {
            id: 4,
            title: 'Cypress Hall',
            key: 'facilities'
        },
        {
            id: 5,
            title: 'Eisner Education',
            key: 'facilities'
        },
        {
            id: 6,
            title: 'Eucalyptus Hall',
            key: 'facilities'
        },
        {
            id: 7,
            title: 'Extended Learning University Building',
            key: 'facilities'
        },
        {
            id: 8,
            title: 'Jacaranda Hall',
            key: 'facilities'
        },
        {
            id: 9,
            title: 'Jeanne Chisholm Hall',
            key: 'facilities'
        },
        {
            id: 10,
            title: 'Jerome Richfield Hall',
            key: 'facilities'
        },
        {
            id: 11,
            title: 'Bookstein Hall (former Juniper Hall)',
            key: 'facilities'
        },
        {
            id: 12,
            title: 'Klotz Student Health Center LEVEL 1',
            key: 'facilities'
        },
        {
            id: 13,
            title: 'Klotz Student Health Center LEVEL 2',
            key: 'facilities'
        },
        {
            id: 14,
            title: 'Live Oak Hall',
            key: 'facilities'
        },
        {
            id: 15,
            title: 'Magnolia Hall',
            key: 'facilities'
        },
        {
            id: 16,
            title: 'Manzanita Hall',
            key: 'facilities'
        },
        {
            id: 17,
            title: 'Matador Bookstore Complex',
            key: 'facilities'
        },
        {
            id: 18,
            title: 'Matador Hall',
            key: 'facilities'
        },
        {
            id: 19,
            title: 'Monterey Hall',
            key: 'facilities'
        },
        {
            id: 20,
            title: 'Nordhoff Hall',
            key: 'facilities'
        },
        {
            id: 21,
            title: 'Noski Auditorium',
            key: 'facilities'
        },
        {
            id: 22,
            title: 'University Library',
            key: 'facilities'
        },
        {
            id: 23,
            title: 'Planetarium',
            key: 'facilities'
        },
        {
            id: 24,
            title: 'Police Services Building',
            key: 'facilities'
        },
        {
            id: 25,
            title: 'Redwood Hall',
            key: 'facilities'
        },
        {
            id: 26,
            title: 'Santa Susana Hall',
            key: 'facilities'
        },
        {
            id: 27,
            title: 'Sequoia Hall',
            key: 'facilities'
        },
        {
            id: 28,
            title: 'Sierra Center',
            key: 'facilities'
        },
        {
            id: 29,
            title: 'Sierra Hall',
            key: 'facilities'
        },
        {
            id: 30,
            title: 'Sierra Tower',
            key: 'facilities'
        },
 

    ];

    return result;
};

export const prioritiesArray = () => {
    const result = [
        {
            id: 0,
            title: 'Low',
            key: 'priorities'
        },
        {
            id: 1,
            title: 'Medium',
            key: 'priorities'
        },
        {
            id: 2,
            title: 'High',
            key: 'priorities'
        },
        {
            id: 3,
            title: 'Emergency',
            key: 'priorities'
        }
    ];

    return result;
};
