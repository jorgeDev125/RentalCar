"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircleIcon } from "lucide-react"
import { useState } from "react"
import { FormAddCar } from "../FormAddCard"



export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={()=>setOpenDialog(true)}>
                    Add new car
                    <PlusCircleIcon className="ml-2"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Form to add a new car</DialogTitle>
                    <DialogDescription>
                        <FormAddCar /* setOpenDialog={setOpenDialog} */ />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
