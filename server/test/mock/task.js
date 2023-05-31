const Task = {
    default: {
        title: 'Title',
        description: 'We have a Task!',
        date_creation: new Date('10/02/2023'),
        date_end: null,
        status: false,
        deleted: false
    },
    secondTask: {
        title: 'second Title',
        description: 'We have other Task!',
        date_creation: new Date('10/08/2023'),
        date_end: new Date('11/01/2023'),
        status: false,
        deleted: false
    },
    modified: {
        title: 'New Title',
        description: 'Modified Description!',
        date_end: new Date('12/02/2023'),
        status: true
    },
    deleted: {
        title: 'New Title',
        description: 'Modified Description!',
        date_end: new Date('12/02/2023'),
        status: true,
        deleted: true
    }    
};

module.exports = Task;