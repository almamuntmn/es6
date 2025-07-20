let data = {
    Shopia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "St lorence" }
                    ]
            }
        ]
    }
}

const secondarySchool = data.Shopia[0].secondary.location;

console.log(secondarySchool);