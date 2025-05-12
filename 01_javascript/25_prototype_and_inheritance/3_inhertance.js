const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};
Teacher.__proto__ = TeachingSupport;

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
