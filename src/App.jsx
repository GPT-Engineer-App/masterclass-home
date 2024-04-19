import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card.jsx";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const masterclasses = [
    { title: "Cooking Basics", description: "Learn the fundamentals of cooking." },
    { title: "Photography", description: "Master the art of capturing moments." },
    { title: "Guitar Lessons", description: "Strum the strings like a pro." },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Masterclass</h1>
        <div className="mt-4">
          <Input placeholder="Search for a masterclass..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-1/2" />
          <Button onClick={() => console.log("Searching for:", searchTerm)}>Search</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {masterclasses.map((mc, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{mc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{mc.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="secondary"
                onClick={() => {
                  setSelectedCourse(mc);
                  setIsModalOpen(true);
                }}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>{selectedCourse?.description}</DialogDescription>
            {}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default App;
