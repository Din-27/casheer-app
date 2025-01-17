import Table from '../../components/Table/Table'

export default function User() {
    return (
        <div className="space-y-2">
            <h2 className="ml-2 text-lg font-bold">Akun User</h2>
            <Table
                data={[
                    { nama: "herdin", role: "OWNER" },
                    { nama: "herdin", role: "OWNER" },
                ]}
                tableOnly={true}
            />
        </div>
    )
}
