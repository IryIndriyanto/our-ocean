import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

export default function AddLocationForm  ({latitudeSelected, longitudeSelected}:any) {
  return (
    <form>
      <FormControl my='8px'>
        <FormLabel mb='4px'>Latitude</FormLabel>
        <Input type="text" disabled value={latitudeSelected} />
        <FormLabel>Longitude</FormLabel>
        <Input type="text" disabled  value={longitudeSelected}/>
        <FormLabel>Location Name</FormLabel>
        <Input type="text" placeholder="Enter location name" />
        <FormLabel>Location Description</FormLabel>
        <Textarea placeholder="Enter location description" />
      </FormControl>
      {/* Add more form controls for other fields */}
      <Button variant="brand"  w='100%' mt={4}>
        Add New Location
      </Button>
    </form>
  )
}
