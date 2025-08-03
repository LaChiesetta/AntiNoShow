'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2, User, Phone, Mail, Check, X } from "lucide-react";

interface UserDetailsProps {
  user: {
    name: string;
    phone: string;
    email: string;
  };
  onUpdate: (user: { name: string; phone: string; email: string }) => void;
}

export const UserDetailsCard = ({ user, onUpdate }: UserDetailsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    onUpdate(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <Card className="w-full bg-card shadow-card border-border/50 animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <User className="w-5 h-5 text-terracotta" />
            Your Details
          </CardTitle>
          {!isEditing && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-terracotta hover:text-terracotta/80 hover:bg-terracotta/10"
            >
              <Edit2 className="w-4 h-4 mr-1" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Name</Label>
              <Input
                id="name"
                value={editedUser.name}
                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                className="border-border focus:border-terracotta focus:ring-terracotta/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
              <Input
                id="phone"
                value={editedUser.phone}
                onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                className="border-border focus:border-terracotta focus:ring-terracotta/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                className="border-border focus:border-terracotta focus:ring-terracotta/20"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-terracotta hover:bg-terracotta/90 text-white flex-1"
              >
                <Check className="w-4 h-4 mr-1" />
                Save
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                size="sm"
                className="border-border hover:bg-muted flex-1"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-warm">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{user.name}</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-warm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-warm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>{user.email}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};