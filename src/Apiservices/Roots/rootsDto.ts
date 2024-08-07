export const formaterDataAuth = (dataU: any) => {
    const {
        id,
        email,
        fullname,
        phone,
        birthday,
        Score,
        status_user,
        createdAt: userCreatedAt,
        updatedAt: userUpdatedAt,
        Roles: [
            {
                id: roleId,
                name_role,
                status_role,
                description_role,
                createdAt: roleCreatedAt,
                updatedAt: roleUpdatedAt,
                Permissions: [
                    {
                        id: permissionId,
                        name_permission,
                        conditions,
                        code,
                        creates,
                        reads,
                        updates,
                        deletes,
                        admins,
                        exports,
                        imports,
                        approve,
                        generate_reports,
                        configure,
                        restrict,
                        manage_users,
                        manage_roles,
                        audit,
                        status_permission,
                        createdAt: permissionCreatedAt,
                        updatedAt: permissionUpdatedAt,
                    },
                ],
            },
        ],
        Branches: [
            {
                id: branchId,
                name_branch,
                conditions: branch_conditions,
                idCompany,
                branch_long,
                branch_lat,
                branch_score,
                guest,
                status_branch,
                createdAt: branchCreatedAt,
                updatedAt: branchUpdatedAt,
                Company: {
                    id: companyId,
                    company,
                    companyPhone,
                    companyEmail,
                    urlCompany,
                    status_company,
                    createdAt: companyCreatedAt,
                    updatedAt: companyUpdatedAt,
                },
                Shifts: [
                    {
                        id: shiftId,
                        name: shift_name,
                        start_time,
                        end_time,
                        status_shift,
                        TypeshiptId,
                        createdAt: shiftCreatedAt,
                        updatedAt: shiftUpdatedAt,
                    },
                ],
            },
        ]
    } = dataU

    return {
        id,
        email,
        fullname,
        phone,
        birthday,
        Score,
        status_user,
        name_role,
        name_permission,
        conditions,
        code,
        creates,
        reads,
        updates,
        deletes,
        admins,
        exports,
        imports,
        approve,
        generate_reports,
        configure,
        restrict,
        manage_users,
        manage_roles,
        audit,
        name_branch,
        branch_long,
        branch_lat,
        branch_score,
        company,
        companyPhone,
        companyEmail,
        urlCompany,
        status_company,
        shift_name,
        start_time,
        end_time,
        status_shift,

    }
}
export const rootFormateDtoo = (dataU: any) => {

    const result = Array.from(new Set(dataU.map((item: any) => item["table_name"])));


    const dataFormaterArray = result.reduce((acc: any[], element: any) => {
        const filterDataColumns = dataU.filter((item: any) => item.table_name === element);

        if (filterDataColumns.length > 0) {
            acc.push({
                table_fullname: filterDataColumns[0].table_name,
                table_columns: filterDataColumns
            });
        }

        return acc;
    }, []);

    return dataFormaterArray;
}
