"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formaterDataAuthServices = void 0;
const formaterDataAuthServices = (dataU) => {
    const { id, email, fullname, phone, birthday, Score, status_user, createdAt: userCreatedAt, updatedAt: userUpdatedAt, Roles: [{ id: roleId, name_role, status_role, description_role, createdAt: roleCreatedAt, updatedAt: roleUpdatedAt, Permissions: [{ id: permissionId, name_permission, conditions, code, creates, reads, updates, deletes, admins, exports, imports, approve, generate_reports, configure, restrict, manage_users, manage_roles, audit, status_permission, createdAt: permissionCreatedAt, updatedAt: permissionUpdatedAt, },], },], Branches: [{ id: branchId, name_branch, conditions: branch_conditions, idCompany, branch_long, branch_lat, branch_score, guest, status_branch, createdAt: branchCreatedAt, updatedAt: branchUpdatedAt, Company: { id: companyId, company, companyPhone, companyEmail, urlCompany, status_company, createdAt: companyCreatedAt, updatedAt: companyUpdatedAt, }, Shifts: [{ id: shiftId, name: shift_name, start_time, end_time, status_shift, TypeshiptId, createdAt: shiftCreatedAt, updatedAt: shiftUpdatedAt, },], },] } = dataU;
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
    };
};
exports.formaterDataAuthServices = formaterDataAuthServices;
