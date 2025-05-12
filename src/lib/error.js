import { toast } from "sonner";

export default function error(err) {
    if (err.status == 422 && typeof err?.response?.data?.message == "object") {
        const message = Object.values(err?.response?.data?.message).flat();
        toast.error("Validasi gagal!",
            {
                description: <>
                    <ul className="list-disc ml-4">
                        {message.map((msg, index) => (
                            <li key={index}>{msg}</li>
                        ))}
                    </ul>
                </>
            }
        )
    } else {
        toast.error(err?.response?.data?.message ?? err?.message)
    }

}