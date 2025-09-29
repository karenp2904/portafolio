package com.karenperez.portfolio.controller;

import com.karenperez.portfolio.model.Skill;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("fullName", "Karen Yulieth Perez");
        model.addAttribute("description", "Estudiante de Ingeniería de Sistemas e Informática en la Universidad Pontificia Bolivariana, comprometida con la innovación y el aprendizaje constante.");
        return "home";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/skills")
    public String skills(Model model) {
        List<Skill> skills = Arrays.asList(
            new Skill("Java", "lucide:coffee"),
            new Skill("JavaScript", "logos:javascript"),
            new Skill("Servicios de Nube", "lucide:cloud"),
            new Skill("Documentación", "lucide:file-text")
        );
        model.addAttribute("skills", skills);
        return "skills";
    }

    @GetMapping("/projects")
    public String projects() {
        return "projects";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
}
