import ClinicModel, {ClinicAtributes,ClinicCreationalAtributes} from "../database/models/ClinicModel";

class ClinicService {
    public static async create(clinic: ClinicCreationalAtributes): Promise<ClinicAtributes> {
        const clinicCreate =  await ClinicModel.create(clinic);

        return clinicCreate.toJSON();
    }
};

export default ClinicService;