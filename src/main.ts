import ClinicService from "./services/ClinicService";

const main = async (): Promise<void> => {

    const clinicCreated = await ClinicService.create({
        name: 'PetCare',
        address: 'rua de baixo',
        phone: '11959037783'
    });

    console.log(clinicCreated)
};

main();